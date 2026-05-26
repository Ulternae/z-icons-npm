import React from 'react';

export interface LanChurchProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanChurch: React.FC<LanChurchProps>;
export default LanChurch;
