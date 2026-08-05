import React from 'react';

export interface LanFacePleadingProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFacePleading(props: LanFacePleadingProps): React.ReactElement;
export default LanFacePleading;
