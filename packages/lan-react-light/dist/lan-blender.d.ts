import React from 'react';

export interface LanBlenderProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBlender(props: LanBlenderProps): React.ReactElement;
export default LanBlender;
