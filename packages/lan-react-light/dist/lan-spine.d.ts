import React from 'react';

export interface LanSpineProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSpine(props: LanSpineProps): React.ReactElement;
export default LanSpine;
