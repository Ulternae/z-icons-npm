import React from 'react';

export interface BruAppStoreIosProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruAppStoreIos: React.FC<BruAppStoreIosProps>;
export default BruAppStoreIos;
