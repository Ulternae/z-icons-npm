import React from 'react';

export interface LanFaceKissProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFaceKiss(props: LanFaceKissProps): React.ReactElement;
export default LanFaceKiss;
