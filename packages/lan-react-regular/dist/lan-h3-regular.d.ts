import React from 'react';

export interface LanH3RegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanH3Regular(props: LanH3RegularProps): React.ReactElement;
export default LanH3Regular;
