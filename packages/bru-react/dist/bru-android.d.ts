import React from 'react';

export interface BruAndroidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruAndroid(props: BruAndroidProps): React.ReactElement;
export default BruAndroid;
