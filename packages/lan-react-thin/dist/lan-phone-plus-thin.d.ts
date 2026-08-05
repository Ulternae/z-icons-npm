import React from 'react';

export interface LanPhonePlusThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPhonePlusThin(props: LanPhonePlusThinProps): React.ReactElement;
export default LanPhonePlusThin;
