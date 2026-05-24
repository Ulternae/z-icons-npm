import React from 'react';

export interface BruAppStoreProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruAppStore: React.FC<BruAppStoreProps>;
export default BruAppStore;
