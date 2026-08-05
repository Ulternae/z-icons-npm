import React from 'react';

export interface LanFeatherAltProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFeatherAlt(props: LanFeatherAltProps): React.ReactElement;
export default LanFeatherAlt;
