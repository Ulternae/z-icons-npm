import React from 'react';

export interface LanChildProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanChild(props: LanChildProps): React.ReactElement;
export default LanChild;
