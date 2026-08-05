import React from 'react';

export interface LanH5RegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanH5Regular(props: LanH5RegularProps): React.ReactElement;
export default LanH5Regular;
