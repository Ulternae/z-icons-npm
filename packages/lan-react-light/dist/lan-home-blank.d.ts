import React from 'react';

export interface LanHomeBlankProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHomeBlank(props: LanHomeBlankProps): React.ReactElement;
export default LanHomeBlank;
