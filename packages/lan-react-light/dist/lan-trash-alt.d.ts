import React from 'react';

export interface LanTrashAltProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTrashAlt(props: LanTrashAltProps): React.ReactElement;
export default LanTrashAlt;
