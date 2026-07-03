import React from 'react';

export interface BruFlutterProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruFlutter(props: BruFlutterProps): React.ReactElement;
export default BruFlutter;
