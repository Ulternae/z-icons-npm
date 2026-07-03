import React from 'react';

export interface BruMdbProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruMdb(props: BruMdbProps): React.ReactElement;
export default BruMdb;
