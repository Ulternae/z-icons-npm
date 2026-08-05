import React from 'react';

export interface LanH6RegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanH6Regular(props: LanH6RegularProps): React.ReactElement;
export default LanH6Regular;
