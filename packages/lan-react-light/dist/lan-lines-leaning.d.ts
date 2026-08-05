import React from 'react';

export interface LanLinesLeaningProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanLinesLeaning(props: LanLinesLeaningProps): React.ReactElement;
export default LanLinesLeaning;
