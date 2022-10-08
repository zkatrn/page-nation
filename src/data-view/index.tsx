import React, { useEffect, useState } from 'react';
import './styles.scss';
import { DataViewProps, DataType } from './types';
import Pagination from '../pagination';

const DataView = ({ data }: DataViewProps) => {
  const pageSize = 10;
  const [page, setPage] = useState(1);
  const [dataGroup, setDataGroup] = useState([]);

  useEffect(() => {
    const dataList = JSON.parse(JSON.stringify(data));
    const _group = [];

    for (let i = 0; i < data.length; i += pageSize) {
      _group.push(dataList.slice(i, i + pageSize));
    }

    setDataGroup(_group);
  }, [data]);

  return (
    <div>
      <div className="table">
        <div className="row titles">
          <span>Id</span>
          <span>Title</span>
        </div>

        {!!dataGroup?.length
          ? dataGroup[page - 1].map((item: DataType, i: number) => (
              <div className="row">
                <span>{item.id}</span>
                <span>{item.title}</span>
              </div>
            ))
          : 'No Results'}
      </div>

      <Pagination
        currentPage={page}
        threshold={3}
        totalPages={dataGroup?.length}
        onPageChange={(page: number) => {
          setPage(page);
        }}
      />
    </div>
  );
};

export default DataView;
