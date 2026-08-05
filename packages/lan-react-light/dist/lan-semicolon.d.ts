import React from 'react';

export interface LanSemicolonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSemicolon(props: LanSemicolonProps): React.ReactElement;
export default LanSemicolon;
