import React from 'react';

export interface LanEllipsisHAltProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanEllipsisHAlt(props: LanEllipsisHAltProps): React.ReactElement;
export default LanEllipsisHAlt;
