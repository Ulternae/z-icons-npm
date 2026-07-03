import React from 'react';

export interface BruAppStoreProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruAppStore(props: BruAppStoreProps): React.ReactElement;
export default BruAppStore;
