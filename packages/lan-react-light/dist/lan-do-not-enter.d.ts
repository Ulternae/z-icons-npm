import React from 'react';

export interface LanDoNotEnterProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDoNotEnter(props: LanDoNotEnterProps): React.ReactElement;
export default LanDoNotEnter;
