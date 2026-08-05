import React from 'react';

export interface LanIndentProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanIndent(props: LanIndentProps): React.ReactElement;
export default LanIndent;
