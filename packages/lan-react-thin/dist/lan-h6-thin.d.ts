import React from 'react';

export interface LanH6ThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanH6Thin(props: LanH6ThinProps): React.ReactElement;
export default LanH6Thin;
