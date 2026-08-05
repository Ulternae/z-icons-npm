import React from 'react';

export interface LanFaceMehBlankProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFaceMehBlank(props: LanFaceMehBlankProps): React.ReactElement;
export default LanFaceMehBlank;
