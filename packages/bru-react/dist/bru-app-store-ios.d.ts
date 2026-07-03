import React from 'react';

export interface BruAppStoreIosProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruAppStoreIos(props: BruAppStoreIosProps): React.ReactElement;
export default BruAppStoreIos;
