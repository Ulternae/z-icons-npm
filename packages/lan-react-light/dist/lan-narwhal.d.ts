import React from 'react';

export interface LanNarwhalProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanNarwhal(props: LanNarwhalProps): React.ReactElement;
export default LanNarwhal;
