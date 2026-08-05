import React from 'react';

export interface LanFaceSmilingHandsSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFaceSmilingHandsSolid(props: LanFaceSmilingHandsSolidProps): React.ReactElement;
export default LanFaceSmilingHandsSolid;
