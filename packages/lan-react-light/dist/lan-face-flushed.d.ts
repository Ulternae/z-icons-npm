import React from 'react';

export interface LanFaceFlushedProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFaceFlushed(props: LanFaceFlushedProps): React.ReactElement;
export default LanFaceFlushed;
