import React from 'react';

export interface LanGrid5RegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGrid5Regular(props: LanGrid5RegularProps): React.ReactElement;
export default LanGrid5Regular;
