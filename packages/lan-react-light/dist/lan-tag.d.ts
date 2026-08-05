import React from 'react';

export interface LanTagProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTag(props: LanTagProps): React.ReactElement;
export default LanTag;
