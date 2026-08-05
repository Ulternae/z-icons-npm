import React from 'react';

export interface LanBookSpineProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBookSpine(props: LanBookSpineProps): React.ReactElement;
export default LanBookSpine;
