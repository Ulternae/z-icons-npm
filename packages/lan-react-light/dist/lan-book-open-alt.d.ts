import React from 'react';

export interface LanBookOpenAltProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBookOpenAlt(props: LanBookOpenAltProps): React.ReactElement;
export default LanBookOpenAlt;
