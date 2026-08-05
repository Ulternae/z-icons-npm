import React from 'react';

export interface LanH1RegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanH1Regular(props: LanH1RegularProps): React.ReactElement;
export default LanH1Regular;
