import React from 'react';

export interface LanInputTextThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanInputTextThin(props: LanInputTextThinProps): React.ReactElement;
export default LanInputTextThin;
