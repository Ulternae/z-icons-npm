import React from 'react';

export interface BruPostgresqlProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruPostgresql: React.FC<BruPostgresqlProps>;
export default BruPostgresql;
