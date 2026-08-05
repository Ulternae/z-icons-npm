import React from 'react';

export interface LanPhonePlusRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPhonePlusRegular(props: LanPhonePlusRegularProps): React.ReactElement;
export default LanPhonePlusRegular;
