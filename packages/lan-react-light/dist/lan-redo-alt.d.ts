import React from 'react';

export interface LanRedoAltProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRedoAlt(props: LanRedoAltProps): React.ReactElement;
export default LanRedoAlt;
