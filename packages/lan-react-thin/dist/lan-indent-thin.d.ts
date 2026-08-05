import React from 'react';

export interface LanIndentThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanIndentThin(props: LanIndentThinProps): React.ReactElement;
export default LanIndentThin;
