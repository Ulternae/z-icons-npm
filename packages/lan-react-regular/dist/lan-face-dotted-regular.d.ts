import React from 'react';

export interface LanFaceDottedRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFaceDottedRegular(props: LanFaceDottedRegularProps): React.ReactElement;
export default LanFaceDottedRegular;
