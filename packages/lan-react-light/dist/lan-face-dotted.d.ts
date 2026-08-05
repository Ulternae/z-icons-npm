import React from 'react';

export interface LanFaceDottedProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFaceDotted(props: LanFaceDottedProps): React.ReactElement;
export default LanFaceDotted;
