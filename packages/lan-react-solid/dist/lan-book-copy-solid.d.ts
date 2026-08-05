import React from 'react';

export interface LanBookCopySolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBookCopySolid(props: LanBookCopySolidProps): React.ReactElement;
export default LanBookCopySolid;
