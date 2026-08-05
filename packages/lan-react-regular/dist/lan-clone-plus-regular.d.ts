import React from 'react';

export interface LanClonePlusRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanClonePlusRegular(props: LanClonePlusRegularProps): React.ReactElement;
export default LanClonePlusRegular;
