import React from 'react';

export interface BruPostgresqlProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruPostgresql(props: BruPostgresqlProps): React.ReactElement;
export default BruPostgresql;
