import React from 'react';

export interface LanFaceFearfulProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFaceFearful(props: LanFaceFearfulProps): React.ReactElement;
export default LanFaceFearful;
