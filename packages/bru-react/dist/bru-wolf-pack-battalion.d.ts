import React from 'react';

export interface BruWolfPackBattalionProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruWolfPackBattalion(props: BruWolfPackBattalionProps): React.ReactElement;
export default BruWolfPackBattalion;
