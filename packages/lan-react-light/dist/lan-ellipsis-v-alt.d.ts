import React from 'react';

export interface LanEllipsisVAltProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanEllipsisVAlt(props: LanEllipsisVAltProps): React.ReactElement;
export default LanEllipsisVAlt;
