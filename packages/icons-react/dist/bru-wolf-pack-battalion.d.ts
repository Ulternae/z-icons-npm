import React from 'react';

export interface BruWolfPackBattalionProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruWolfPackBattalion: React.FC<BruWolfPackBattalionProps>;
export default BruWolfPackBattalion;
