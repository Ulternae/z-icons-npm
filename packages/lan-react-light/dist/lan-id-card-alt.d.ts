import React from 'react';

export interface LanIdCardAltProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanIdCardAlt(props: LanIdCardAltProps): React.ReactElement;
export default LanIdCardAlt;
