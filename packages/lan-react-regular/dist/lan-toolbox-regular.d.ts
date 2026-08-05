import React from 'react';

export interface LanToolboxRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanToolboxRegular(props: LanToolboxRegularProps): React.ReactElement;
export default LanToolboxRegular;
