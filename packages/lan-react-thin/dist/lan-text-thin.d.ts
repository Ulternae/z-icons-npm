import React from 'react';

export interface LanTextThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTextThin(props: LanTextThinProps): React.ReactElement;
export default LanTextThin;
