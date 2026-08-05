import React from 'react';

export interface LanItalicThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanItalicThin(props: LanItalicThinProps): React.ReactElement;
export default LanItalicThin;
