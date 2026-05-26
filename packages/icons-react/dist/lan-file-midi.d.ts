import React from 'react';

export interface LanFileMidiProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFileMidi: React.FC<LanFileMidiProps>;
export default LanFileMidi;
